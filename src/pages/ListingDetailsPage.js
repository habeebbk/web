import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailsContainer = styled.div`
  padding: 20px;
`;

const ListingImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ListingTitle = styled.h1`
  font-size: 2em;
  margin: 20px 0;
`;

const ListingDetails = styled.div`
  font-size: 1.2em;
`;

function ListingDetailsPage() {
  const { id } = useParams();
  
  // Dummy data, replace with real data from API or database
  const listings = [
    { id: 1, title: 'Beautiful Family House', price: '$500,000', location: 'New York', type: 'House', description: 'A lovely family house with a spacious backyard.', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 2, title: 'Modern Glass Villa', price: '$1,200,000', location: 'Los Angeles', type: 'Villa', description: 'A luxurious villa with stunning glass walls and a pool.', image: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004046.jpg' },
    { id: 3, title: 'Cozy Cottage', price: '$250,000', location: 'Austin', type: 'Cottage', description: 'A quaint cottage perfect for a small family.', image: 'https://i.ytimg.com/vi/VLfPUJCPDqY/maxresdefault.jpg' },
    // Add more listings here
  ];

  const listing = listings.find(listing => listing.id === parseInt(id));

  return (
    <DetailsContainer>
      {listing ? (
        <>
          <ListingImage src={listing.image} alt={listing.title} />
          <ListingTitle>{listing.title}</ListingTitle>
          <ListingDetails>
            <p><strong>Price:</strong> {listing.price}</p>
            <p><strong>Location:</strong> {listing.location}</p>
            <p><strong>Type:</strong> {listing.type}</p>
            <p><strong>Description:</strong> {listing.description}</p>
          </ListingDetails>
        </>
      ) : (
        <p>Listing not found</p>
      )}
    </DetailsContainer>
  );
}

export default ListingDetailsPage;
