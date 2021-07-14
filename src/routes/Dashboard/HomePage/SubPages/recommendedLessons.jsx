import React from "react";
import DashboardLayout from "../../../../components/Layout";
import { HomeSubPagesStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { DummyLessonsData } from "../../../../utils/dataHelpers/cardsData";
import { Link } from "react-router-dom";
import LessonCard from "../../../../components/LessonCards";
// import PagesHeader from "../../../../components/PagesHeader";

const RecommendedLessons = () => {
  const { Title } = Typography;

  return (
    <DashboardLayout>
      <HomeSubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="homeSubPages">
          <FlexibleDiv width="97%">
            {/* header section */}
            {/* <PagesHeader headerText="Library 📗" /> */}

            {/* body section */}

            <FlexibleDiv flexDir="column" className="homeSubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="homeSubPagesWrap__header"
              >
                <Title level={4}> Recommended Lessons</Title>
                <Link to="/">Back</Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="homeSubPagesWrap__cards"
                justifyContent="space-between"
                // flexWrap="nowrap"
              >
                {DummyLessonsData.map((item, index) => (
                  <LessonCard
                    key={index}
                    subjectImage={item.subjectImage}
                    duration={item.duration}
                    subjectName={item.subjectName}
                    studentClass={item.studentClass}
                    topic={item.topic}
                    topicDescription={item.topicDescription}
                    numberOfLessons={item.numberOfLessons}
                    course={item}
                  />
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </HomeSubPagesStyles>
    </DashboardLayout>
  );
};

export default RecommendedLessons;
