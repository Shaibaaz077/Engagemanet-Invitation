import InvitationCard from "@/components/InvitationCard";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Engagement Invitation - Syed Sultan Uddin Quadri</title>
        <meta 
          name="description" 
          content="Solicit your gracious presence on the auspicious occasion of the engagement ceremony of Syed Sultan Uddin Quadri on November 23, 2025 (2nd Jamadi-us-Sani 1447 Hijri) at SS Function Hall, Tolichowki, Hyderabad" 
        />
      </Helmet>
      <InvitationCard />
    </>
  );
};

export default Index;
