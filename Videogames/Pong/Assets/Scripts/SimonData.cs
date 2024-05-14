// Miguel Soria A01028033
// 13/5/2024
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class ColorButton
{
    public int id;
    public int r;
    public int g;
    public int b;
}

public class ColorButtons 
{
    public List<ColorButton> buttons;
}