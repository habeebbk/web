import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './ListingsPage.css'; 
const ListingsContainer = styled.div`
  padding: 20px;
`;

const FilterForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-size: 1em;
`;

const FilterInput = styled.input`
  padding: 8px;
  font-size: 1em;
`;

const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ListingCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  cursor: pointer;
  &:hover {
    background-color: #e2e6ea;
  }
`;

function ListingsPage() {
  const [filter, setFilter] = useState({
    price: '',
    location: '',
    type: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const listings = [
    { id: 1, title: 'Beautiful Family House', price: '$500,000', location: 'New York', type: 'House', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 2, title: 'Modern Glass Villa', price: '$1,200,000', location: 'Los Angeles', type: 'Villa', image: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004046.jpg' },
    { id: 3, title: 'Cozy Cottage', price: '$250,000', location: 'Austin', type: 'Cottage', image: 'https://i.ytimg.com/vi/VLfPUJCPDqY/maxresdefault.jpg' },
    // Add more listings here
  ];

  const filteredListings = listings.filter(listing => {
    return (
      (filter.price === '' || listing.price.includes(filter.price)) &&
      (filter.location === '' || listing.location.includes(filter.location)) &&
      (filter.type === '' || listing.type.includes(filter.type))
    );
  });

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const currentListings = filteredListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <ListingsContainer>
      <FilterForm>
        <FilterLabel htmlFor="price">Price:</FilterLabel>
        <FilterInput
          id="price"
          type="text"
          value={filter.price}
          onChange={(e) => setFilter({ ...filter, price: e.target.value })}
        />
        <FilterLabel htmlFor="location">Location:</FilterLabel>
        <FilterInput
          id="location"
          type="text"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        />
        <FilterLabel htmlFor="type">Type:</FilterLabel>
        <FilterInput
          id="type"
          type="text"
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        />
      </FilterForm>

      <ListingsGrid>
        {currentListings.map((listing) => (
          <ListingCard key={listing.id}>
            <ListingImage src={listing.image} alt={listing.title} />
            <ListingDetails>
              <ListingTitle>
                <Link to={`/listing/${listing.id}`}>{listing.title}</Link>
              </ListingTitle>
              <ListingPrice>{listing.price}</ListingPrice>
              <p>{listing.location}</p>
              <p>{listing.type}</p>
            </ListingDetails>
          </ListingCard>
        ))}
      </ListingsGrid>

      <Pagination>
        <PageButton
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </PageButton>
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </PageButton>
      </Pagination>
    </ListingsContainer>
  );
}


export default ListingsPage;
