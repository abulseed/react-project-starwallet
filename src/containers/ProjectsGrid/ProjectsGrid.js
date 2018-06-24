import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DataStore from '../../assets/data/data-store.json';
import MainHeadline from '../../components/Projects/MainHeadline/MainHeadline';
import PanelListGroup from '../../hoc/Panel/PanelListGroup';
import Aux from '../../hoc/Aux';
import VerboseProjectHeader from '../../components/Projects/Verbose/VerboseProjectHeader';
import VerboseProjectBar from '../../components/Projects/Verbose/VerboseProjectBar';

class ProjectsGrid extends Component {
  render() {
    const unScroll = {
      overflow: 'unset'
    }
    return (
      <Grid fluid>
        {/* <Row>
          <Col md={12}>
            
          </Col>
        </Row> */}
        <Row>
          <Col md={12}>
            <PanelListGroup
              headerStyle='VerboseProjectsHeader'
              overflow={unScroll}
              heading={<MainHeadline projects={this.props.projects} />} >
              <Aux>
                <VerboseProjectHeader />
                <VerboseProjectBar list={this.props.projects} />
              </Aux>
            </PanelListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProjectsGrid;