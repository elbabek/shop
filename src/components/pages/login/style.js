import styled from "styled-components";

export const FormWrapper = styled.form`
width: 25%;
margin: 0 auto;
border: 1px solid black;
border: none;
padding: 1rem;
border-color: cornflowerblue;
border-radius: 10px;
margin-top: 2rem;
box-shadow: 10px 10px 55px 6px rgba(86,13,13,0.75);
-webkit-box-shadow: 10px 10px 55px 6px rgba(86,13,13,0.75);
-moz-box-shadow: 10px 10px 55px 6px rgba(86,13,13,0.75);

@media (min-width: 1200px) {
    {
        width: 25%;
    }
}

@media (max-width: 992px) { 
{
    width: 35%;
}
 }

@media (max-width: 768px) { 
    {
      width: 40%;
    }
}

@media (max-width: 576px) {
    {
         width: 50%;

    }
}
`

export const Title = styled.h3`
text-align: center;
`

export const TitleLink = styled.p`
text-align: right;
fonst-size:  13px;
text-decoration: none;

& span{
    margin-right: 5px;
}
`