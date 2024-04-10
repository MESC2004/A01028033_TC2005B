/*
 * Script for the goals in pong demo
 * Miguel Enrique Soria A01028033
 *
 * 10/04/2024
 */


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{
    [SerializeField] string side;

    // Variable reference to another script
    PongManager manager;
    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<PongManager>();
    }

    void OnCollisionEnter2D(Collision2D other) {
      manager.Score(side);
      Destroy(other.gameObject);
    }
}
