using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonCotroller : MonoBehaviour
{
    public List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool PlayerTurn = false;
    [SerializeField] int counter;

    // Start is called before the first frame update
    void Start()
    {
       PrepareButtons();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void PrepareButtons()
    {
      for (int i=0; i<buttons.Count; i++) {
        int index = i;
        buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
      }
      // Start the game with the initial button
      addToSequence();
    }

    public void ButtonPressed(int index) {
      if (!PlayerTurn) {
        return;
      }
      else if (index != sequence[counter++]) {
        Debug.Log("Game Over");
        return;
      }
      if (counter == sequence.Count) {
        level++;
        counter = 0;
        PlayerTurn = false;
        addToSequence();
      }
    }


    void addToSequence() {
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(playSequence());
    }

    IEnumerator playSequence() {
      foreach (int index in sequence) {
        buttons[index].Highlight();
        yield return new WaitForSeconds(delay);
    }
    PlayerTurn = true;
    }
}

