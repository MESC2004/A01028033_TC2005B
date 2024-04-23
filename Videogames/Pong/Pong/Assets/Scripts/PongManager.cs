// Miguel Soria 
// Script for managing the pong game 
// 04/23/2024

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float ballSpeed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

    public int pointsLeft;
    public int pointsRight;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }
    
    public void Reset() {
      // Destroy the ball and start a new game if ball is not in game
      if (ball != null) {
        Destroy(ball);
        InitGame();
      }
    }
    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R) && ball != null) {
          Reset();
        } 
    }


    // Start a new game
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    // Serve the ball with a random velocity
    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity 
            = Random.insideUnitCircle.normalized * ballSpeed;
    }

    // Increase the score of the specified player
    public void Score(string side) 
    {
        if (side == "left") 
        {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        } 
        else if (side == "right") 
        {
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        }
    }
}
