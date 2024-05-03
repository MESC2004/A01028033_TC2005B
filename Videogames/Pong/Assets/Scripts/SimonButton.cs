using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
  [SerializeField] float delay;
  Color originalColor;
  AudioSource audio;
    // Start is called before the first frame update
    public void Init(int index)
    {
      originalColor = GetComponent<Image>().color;
      audio = GetComponent<AudioSource>();
      GetComponent<AudioSource>().clip = Resources.Load<AudioClip>($"Audio/{index}");
    }

    public void Highlight() {
      audio.Play();
      StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor() {
      GetComponent<Image>().color = Color.white;
      // Wait for a moment before restoring the original color
      yield return new WaitForSeconds(delay);
      GetComponent<Image>().color = originalColor;
  }
    
}
