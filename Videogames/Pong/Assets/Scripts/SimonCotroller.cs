using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
public class SimonCotroller : MonoBehaviour
{
    public List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool PlayerTurn = false;

    [SerializeField] int counter = 0;
    [SerializeField] int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] TMP_Text SCORE;

    [SerializeField] TMP_Text HISCORE;
    [SerializeField] int hiscore = 0;

    private float lastClickTime = 0f;

    string apiData = @"
    {
        ""buttons"": [
          {
            ""id"": 0,
            ""r"": 1.0,
            ""g"": 0.5,
            ""b"": 0
          },
          {
            ""id"": 0,
            ""r"": 1.0,
            ""g"": 0.5,
            ""b"": 0
          },
          {
            ""id"": 0,
            ""r"": 1.0,
            ""g"": 0.5,
            ""b"": 0
          },
          {
            ""id"": 0,
            ""r"": 1.0,
            ""g"": 0.5,
            ""b"": 0
          },
          {
            ""id"": 0,
            ""r"": 1.0,
            ""g"": 0.5,
            ""b"": 0
          }
        ]
    }
  ";

  [SerializeField] ColorButtons allButtons;


    // Start is called before the first frame update
    void Start()
    {
       PrepareButtons();
    }

    // Update is called once per frame

    void PrepareButtons()
    {
      // Convert the string into an object
      allButtons = JsonUtility.FromJson<ColorButtons>(apiData);

      foreach (ColorButton buttonData in allButtons.buttons) {

        GameObject newButton = Instantiate(buttonPrefab, buttonParent);
        newButton.GetComponent<Image>().color = new Color(buttonData.r, buttonData.g, buttonData.b);
        newButton.GetComponent<SimonButton>().Init(buttonData.id);
        newButton.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(buttonData.id));
        buttons.Add(newButton.GetComponent<SimonButton>());
      }
      /*for (int i=0; i<numButtons; i++) {
        int index = i;
        // create copies of buttons
        GameObject newButton = Instantiate(buttonPrefab, buttonParent);
        newButton.GetComponent<Image>().color = Color.HSVToRGB((float) index/numButtons, 1, 1);
        // Set the default color for each button
        newButton.GetComponent<SimonButton>().Init(index);
        buttons.Add(newButton.GetComponent<SimonButton>());
        buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
      }
      */
      // Start the game with the initial button
      addToSequence();  
    }

    public void ButtonPressed(int index) {
    if (PlayerTurn) {
        float timeSinceLastClick = Time.time - lastClickTime;
        if (timeSinceLastClick > 3.0f) {
            // The player took too long to click, they lose
            Debug.Log("Game Over.");
            SCORE.text = "Game Over. Click restart game to play again.";
            if (level > hiscore) {
                hiscore = level;
                HISCORE.text = $"High Score: {level.ToString()}";
            }
            return;
        }
        lastClickTime = Time.time;

        if (index == sequence[counter++]) {
            buttons[index].Highlight();
            if (counter == sequence.Count) {
                PlayerTurn = false;
                level++;
                SCORE.text = $"Score: {level.ToString()}";
                counter = 0;
                addToSequence();
            }
        } else {
            Debug.Log("Game Over.");
            SCORE.text = "Game Over. Click restart game to play again.";
            if (level > hiscore) {
                hiscore = level;
                HISCORE.text = $"High Score: {level.ToString()}";
            }
        }
    }
}


    void addToSequence() {
      // Adds a new button id to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        delay -= 0.02f;
        StartCoroutine(playSequence());
    }

    IEnumerator playSequence() {
      // Plays the current sequence from the list of button ids and calls SimonButton.cs for Highlight function through the appropriate button from the buttons list
      yield return new WaitForSeconds(delay);
      foreach (int index in sequence) {
        buttons[index].Highlight();
        yield return new WaitForSeconds(delay);
    }
    PlayerTurn = true;
    }

    public void ResetGame() {
      // Resets the game
      delay = 0.5f;
      SCORE.text = "Score: 0";
      sequence.Clear();
      level = 0;
      counter = 0;
      PlayerTurn = false;
      lastClickTime = Time.time;
      addToSequence();
    }
}



