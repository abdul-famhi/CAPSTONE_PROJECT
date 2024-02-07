number=""
function Change1()
{
  number=1
  console.log("called1");
  document.getElementById("ModalText").innerHTML = "The HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.";
}
function Change2()
{
  number=2
  console.log("called2");
}
function Change3()
{
  number=3
  console.log("called3");
}
if (number == 1)
{
    
}
if (number == 2)
{
    document.getElementById("ModalText").innerHTML = "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";
}
if (number == 3)
{
    document.getElementById("ModalText").innerHTML = "JavaScript (JS), is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.";
}