import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: stretch;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary + '20'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary + '20'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.text_secondary + '40'};
  background: ${({ theme }) => theme.background};
  color: black; /* Force black text */
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + '20'};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.text_secondary + '40'};
  background: ${({ theme }) => theme.background};
  color: black; /* Force black text */
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + '20'};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    background: ${({ theme }) => theme.primary + "dd"};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${({ theme }) => theme.text_secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-top: 0.5rem;
  background: ${({ success, theme }) => 
    success ? "rgba(7, 0, 0, 0.1)" : "rgba(18, 17, 17, 0.1)"};
  color: ${({ success, theme }) => 
    success ? theme.primary : theme.error};
`;

const Contact = () => {
  const form = useRef();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", success: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", success: false });

    emailjs
      .sendForm(
        "service_z2enn8o",
        "template_7y5ibff",
        form.current,
        "1RcizH3EBgd2oD_vi"
      )
      .then(
        (result) => {
          setMessage({
            text: "✨ Message sent! I'll get back to you soon!",
            success: true,
          });
          form.current.reset();
        },
        (error) => {
          setMessage({
            text: "😅 Oops! Something went wrong. Please try again!",
            success: false,
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <InfoTitle>Let's Connect!</InfoTitle>
        <InfoText>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
        </InfoText>
        <ContactDetails>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <div>
              <h3>Email</h3>
              <p>harshapenthala@gmail.com</p>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <div>
              <h3>Phone</h3>
              <p>+91 7569460743</p>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </ContactItem>
        </ContactDetails>
        <SocialLinks>
          <SocialLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </ContactInfo>
      
      <ContactForm ref={form} onSubmit={handleSubmit}>
        <Title>Send a Message</Title>
        <Input
          type="text"
          name="user_name"
          required
          placeholder="Your name"
        />
        <Input
          type="email"
          name="user_email"
          required
          placeholder="Your email"
        />
        <TextArea
          name="message"
          required
          placeholder="Your message"
        />
        <SubmitButton
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message ✨"}
        </SubmitButton>
        {message.text && (
          <Message success={message.success}>{message.text}</Message>
        )}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
