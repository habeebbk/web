import React from 'react';
import styled from 'styled-components';

const RentPageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const HeroSection = styled.section`
  background-image: url('https://images.pexels.com/photos/1634058/pexels-photo-1634058.jpeg?auto=compress&cs=tinysrgb&w=600');
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

const SearchForm = styled.form`
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

const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
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

const FeaturedListings = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ListingCard = styled.a`
  display: block;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ListingImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ListingDetails = styled.div`
  padding: 15px;
`;

const ListingTitle = styled.h3`
  font-size: 1.25em;
  margin-bottom: 10px;
`;

const ListingPrice = styled.p`
  font-size: 1.1em;
  color: #28a745;
  margin-bottom: 10px;
`;

function RentPage() {
  const featuredListings = [
    { id: 1, title: 'Cozy Studio Apartment', price: '$1,200/month', image: 'https://media.istockphoto.com/id/1145274818/photo/modern-studio-apartment.jpg?s=612x612&w=0&k=20&c=wJX5K2Rrk5KtKT-oOC4Q1U8AaVwqf2Gb0SG7m5A-l6I=', link: '/listings/1' },
    { id: 2, title: 'Charming 2-Bedroom Flat', price: '$1,800/month', image: 'https://media.istockphoto.com/id/1029522604/photo/modern-luxury-apartment.jpg?s=612x612&w=0&k=20&c=UN8a7r1UskprzyEASJryDkXsoZ9YX2tjOQuX2POX6wY=', link: '/listings/2' },
    { id: 3, title: 'Spacious Family Home', price: '$2,500/month', image: 'https://media.istockphoto.com/id/1192329643/photo/family-home.jpg?s=612x612&w=0&k=20&c=3cb8kvfQ-MFzQOTJ5qCVKPpWUs6_TJ0-LzglVb0yEN4=', link: '/listings/3' },
    // Add more listings here
  ];

  return (
    <RentPageContainer>
      <HeroSection>
        <HeroTitle>Find Your Next Rental</HeroTitle>
        <HeroSubtitle>Explore available properties for rent</HeroSubtitle>
      </HeroSection>

      <SearchForm>
        <FormGroup>
          <FormLabel htmlFor="location">Location</FormLabel>
          <FormInput type="text" id="location" name="location" placeholder="Enter location" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="priceRange">Price Range</FormLabel>
          <FormSelect id="priceRange" name="priceRange">
            <option value="">Select a range</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000+">$3,000+</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="propertyType">Property Type</FormLabel>
          <FormSelect id="propertyType" name="propertyType">
            <option value="">Select a type</option>
            <option value="apartment">Apartment</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
          </FormSelect>
        </FormGroup>
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>

      <FeaturedListings>
        <SectionTitle>Featured Rentals</SectionTitle>
        <ListingsGrid>
          {featuredListings.map((listing) => (
            <ListingCard href={listing.link} key={listing.id}>
              <ListingImage src={listing.image} alt={listing.title} />
              <ListingDetails>
                <ListingTitle>{listing.title}</ListingTitle>
                <ListingPrice>{listing.price}</ListingPrice>
              </ListingDetails>
            </ListingCard>
          ))}
        </ListingsGrid>
      </FeaturedListings>
    </RentPageContainer>
  );
}

export default RentPage;
