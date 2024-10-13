import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container for the whole page
const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

// Hero section with background image
const HeroSection = styled.section`
  position: relative;
  background-image: url('https://images.pexels.com/photos/3646913/pexels-photo-3646913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  height: 400px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

// Overlay for better text readability
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
`;

// Content within the hero section
const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

// Title and subtitle styles
const HeroTitle = styled.h1`
  font-size: 4em; /* Increased font size for impact */
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 2em; /* Increased font size for readability */
  margin: 10px 0;
`;

// Call to action button styles
const CallToAction = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.5em; /* Increased font size */
  margin-top: 20px;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

// Section for featured listings
const FeaturedListings = styled.section`
  padding: 20px;
`;

// Title for sections
const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

// Grid layout for listings
const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

// Styles for each listing card
const ListingCard = styled(Link)`
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

// Image and details within the listing card
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

// Modal for zoomed-in image
const Modal = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

// Section for client testimonials
const Testimonials = styled.section`
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const TestimonialCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.p`
  font-size: 1em;
  color: #555;
`;

// Main HomePage component
function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const featuredListings = [
    { id: 1, title: 'Modern Apartment', price: '$800,000', image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=', link: '/listings/1' },
    { id: 2, title: 'Spacious House', price: '$1,200,000', image: 'https://media.istockphoto.com/id/175448020/photo/beautiful-mansion-with-a-green-yard.jpg?s=612x612&w=0&k=20&c=LdjxAzyHMWakfzLWsgNvxgEfg3w17E-fdnMXpoZJdI8=', link: '/listings/2' },
    { id: 3, title: 'Cozy Cottage', price: '$350,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO1krirV7cNsqooDE6g_UtHluI6Wc1Eq7w&s', link: '/listings/3' },
    // Add more listings here
  ];

  const testimonials = [
    { id: 1, text: 'The team was fantastic! They found us our dream home in no time.', author: 'John Doe' },
    { id: 2, text: 'A seamless experience from start to finish. Highly recommend!', author: 'Jane Smith' },
    { id: 3, text: 'Professional and attentive to our needs. We couldn’t be happier.', author: 'Emily Johnson' },
  ];

  // Function to open modal with selected image
  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <HomePageContainer>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <HeroTitle>Your Dream Home Awaits</HeroTitle>
          <HeroSubtitle>Find the perfect property for you and your family</HeroSubtitle>
          <CallToAction to="/listings">Browse Listings</CallToAction>
        </HeroContent>
      </HeroSection>

      <FeaturedListings>
        <SectionTitle>Featured Listings</SectionTitle>
        <ListingsGrid>
          {featuredListings.map((listing) => (
            <ListingCard to={listing.link} key={listing.id} onClick={() => openModal(listing.image)}>
              <ListingImage src={listing.image} alt={listing.title} />
              <ListingDetails>
                <ListingTitle>{listing.title}</ListingTitle>
                <ListingPrice>{listing.price}</ListingPrice>
              </ListingDetails>
            </ListingCard>
          ))}
        </ListingsGrid>
      </FeaturedListings>

      {/* Modal for zoomed-in image */}
      <Modal isOpen={modalOpen} onClick={closeModal}>
        <ModalImage src={modalImage} alt="Zoomed In" />
      </Modal>

      <Testimonials>
        <SectionTitle>What Our Clients Say</SectionTitle>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </Testimonials>
    </HomePageContainer>
  );
}

export default HomePage;
