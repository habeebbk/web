import React from 'react';
import styled from 'styled-components';

const SellPageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const HeroSection = styled.section`
  background-image: url('https://images.pexels.com/photos/767057/pexels-photo-767057.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: cover;
  background-position: center;
  height: 300px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin: 0;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: 300;
`;

const SellForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function SellPage() {
  return (
    <SellPageContainer>
      <HeroSection>
        <HeroTitle>Sell Your Property</HeroTitle>
        <HeroSubtitle>Get the best value for your home</HeroSubtitle>
      </HeroSection>

      <SellForm>
        <FormGroup>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <FormInput type="text" id="phone" name="phone" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="propertyDetails">Property Details</FormLabel>
          <FormTextarea id="propertyDetails" name="propertyDetails" required></FormTextarea>
        </FormGroup>
        <SubmitButton type="submit">Submit Property</SubmitButton>
      </SellForm>
    </SellPageContainer>
  );
}

export default SellPage;
