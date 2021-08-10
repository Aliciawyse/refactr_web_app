import React from "react";
export const onRenderBody = ({
  setHeadComponents, setPostBodyComponents
}) => {
  setHeadComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `(function(i,s,o,g,r,a,m){i['SLScoutObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://scout-cdn.salesloft.com/sl.js','slscout');
 slscout(["init", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0Ijo5MzI3fQ._yWESyK1NcerVYm4znug5rNzMBGdLuW6WkY08msspak"]);`
      }
    })
  ])
  
  setPostBodyComponents([
    <script
      key="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossOrigin="anonymous"
      defer
    />,
    <script
      key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossOrigin="anonymous"
      defer
    />,
    <script
      key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossOrigin="anonymous"
      defer
    />
  ]);  
}  
