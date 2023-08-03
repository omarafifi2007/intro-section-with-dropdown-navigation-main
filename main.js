
document.getElementById("Feat").addEventListener("click", function ()
{
    document.getElementById("img").style.transform = "rotate(180deg)";
    document.getElementById("div").style.display = 'block';
    document.getElementById("Feat").onclick = function ()
    {
        document.getElementById("img").style.transform = "rotate(0deg)";
        document.getElementById("div").style.display = 'none';
        location.reload();
    }
})

document.getElementById("Comp").addEventListener("click", function ()
{
    document.getElementById("Img").style.transform = "rotate(180deg)";
    document.getElementById("Div").style.display = 'block';
    document.getElementById("Comp").onclick = function ()
    {
        document.getElementById("Img").style.transform = "rotate(0deg)";
        document.getElementById("Div").style.display = 'none';
        location.reload();
    }
})
