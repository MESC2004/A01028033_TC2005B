using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class APIConnection : MonoBehaviour
{
    [SerializeField] string url;
    [SerializeField] string getEndpoint;

    SimonCotroller controller;

    void Start() {
        controller = GetComponent<SimonCotroller>();
    }

    public void GetData() {
        //Debug.Log("GetData Access");
        StartCoroutine(RequestGet(url + getEndpoint));
            }

    IEnumerator RequestGet(string url) {
        // Prepare the request object
        using(UnityWebRequest www = UnityWebRequest.Get(url)) {
            // Make the requuest and wait for it to respond
            yield return www.SendWebRequest();
            Debug.Log("Request sent");

            // Validate response
            if(www.result!=UnityWebRequest.Result.Success) {
                Debug.Log("Request Failed" + www.error);
            } else {
                string result = www.downloadHandler.text;
                Debug.Log("The response was: " + result);
                controller.apiData = result;
                controller.PrepareButtons();
            }
        }
    }   
}
