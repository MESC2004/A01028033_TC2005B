using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
  Color originalColor;
  [SerializeField] float delay;
    // Start is called before the first frame update
    void Start()
    {
      originalColor = GetComponent<Image>().material.color;
    }

    public void Highlight() {
      StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor() {
      GetComponent<Image>().color = Color.white;
      // Wait for a moment before restoring the original color
      yield return new WaitForSeconds(delay);
      GetComponent<Image>().color = originalColor;
  }
    
}
