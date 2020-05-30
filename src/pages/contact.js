import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const FormWrapper = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  input[type=text], input[type=email], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
  }
  textarea {
    height: 200px; 
  }
  input[type=submit] {
    background-color: #67aec7;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #4aa6c7;
  }


`

export default () => (
  <Layout>
    <h2>
      Let's chat! I'm currently looking for summer 2021 internships but I'd love to hear about new opportunities!
    </h2>

    <FormWrapper>
      <form action="https://getform.io/f/37587bae-1205-40dc-a14a-bf90c1fbf6cd" method="POST">

        <label>
          <p>
            Email*
          </p>
          <input type="email" name="email" required />
        </label>
        <label>
          <p>
            Name*
          </p>
          <input type="text" name="name" required />
        </label>
        <label>
          <p>
            Message*
          </p>
          <textarea type="text" name="message" required></textarea>
        </label>
        <input type="submit" value="Submit" />

      </form>
    </FormWrapper>
  </Layout >
)
