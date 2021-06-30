import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow";

function Footer() {

    return (
      <footer>
          <a href="https://github.com/Noemiegrau" target="_blank"><FaGithub icon={["fab", "github"]} /></a>
          <a href="https://fr.linkedin.com/in/noemiegrau" target="_blank"><FaLinkedin icon={["fab", "linkedin"]} /></a>
          <a href="https://stackoverflow.com/users/15119602/noemiegrau" target="_blank"><FaStackOverflow /></a>
      </footer>
    );
  }

export default Footer;
