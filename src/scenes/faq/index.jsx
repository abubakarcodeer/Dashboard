import { Box} from "@mui/material";
import Header from "../../components/Header";
import AccordionComponent from "../../components/AccordionComponent";

const faqs = [" An Important Question","Another Important Question","Your Favorite Question","Some Random Question","The Final Question"]

const FAQ = () => {
  
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqs.map((faq,index)=>(
        <AccordionComponent key={index} title={faq} />
      ))}
    </Box>
  );
};

export default FAQ;