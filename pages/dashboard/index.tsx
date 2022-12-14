import {
  Container,
  Box,
  Text,
  Stack,
  Flex,
  Input,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { BsCardImage } from "react-icons/bs";
import Image from "next/image";
import ContentContainer from "../../components/dashboard/ContentContainer";
import PipelineTable from "../../components/dashboard/PipelineTable";
const Dashboard = () => {
  return (
    <Container
      mt="18"
      border="2"
      mx="0"
      maxW="100%"
    >
      <ContentContainer />
      <PipelineTable/>
    </Container>
  );
};

Dashboard.PageLayout = DashboardLayout;

export default Dashboard;
