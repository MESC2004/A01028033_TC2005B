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
    

    // Start is called before the first frame update
    void Start()
    {
       PrepareButtons();
    }

    // Update is called once per frame

    void PrepareButtons()
    {
      for (int i=0; i<numButtons; i++) {
        int index = i;
        // create copies of buttons
        GameObject newButton = Instantiate(buttonPrefab, buttonParent);
        newButton.GetComponent<Image>().color = Color.HSVToRGB((float) index/numButtons, 1, 1);
        // Set the default color for each button
        newButton.GetComponent<SimonButton>().Init(index);
        buttons.Add(newButton.GetComponent<SimonButton>());
        buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
      }
      // Start the game with the initial button
      addToSequence();  
    }

    public void ButtonPressed(int index) {
      if (PlayerTurn) {
        if (index == sequence[counter++]) {
          buttons[index].Highlight();
          if (counter == sequence.Count) {
            PlayerTurn = false;
            level++;
            SCORE.text = level.ToString();
            counter = 0;
            addToSequence();
          }
        } else {
          Debug.Log("Game Over.");
        }
      }
    }


    void addToSequence() {
      // Adds a new button id to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
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
}

