import React from 'react';
import styled from 'styled-components';

const BuyPageContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const HeroSection = styled.section`
  background-image: url('https://images.pexels.com/photos/286148/pexels-photo-286148.jpeg?auto=compress&cs=tinysrgb&w=600');
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

function BuyPage() {
  const featuredListings = [
    { id: 1, title: 'Modern Apartment', price: '$800,000', image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=', link: '/listings/1' },
    { id: 2, title: 'Spacious House', price: '$1,200,000', image: 'https://media.istockphoto.com/id/175448020/photo/beautiful-mansion-with-a-green-yard.jpg?s=612x612&w=0&k=20&c=LdjxAzyHMWakfzLWsgNvxgEfg3w17E-fdnMXpoZJdI8=', link: '/listings/2' },
    { id: 3, title: 'Cozy Cottage', price: '$350,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO1krirV7cNsqooDE6g_UtHluI6Wc1Eq7w&s', link: '/listings/3' },
    // Add more listings here
  ];

  return (
    <BuyPageContainer>
      <HeroSection>
        <HeroTitle>Find Your Dream Home</HeroTitle>
        <HeroSubtitle>Browse properties available for purchase</HeroSubtitle>
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
            <option value="100000-500000">$100,000 - $500,000</option>
            <option value="500000-1000000">$500,000 - $1,000,000</option>
            <option value="1000000+">$1,000,000+</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="propertyType">Property Type</FormLabel>
          <FormSelect id="propertyType" name="propertyType">
            <option value="">Select a type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="cottage">Cottage</option>
          </FormSelect>
        </FormGroup>
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>

      <FeaturedListings>
        <SectionTitle>Featured Properties</SectionTitle>
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
    </BuyPageContainer>
  );
}

export default BuyPage;
