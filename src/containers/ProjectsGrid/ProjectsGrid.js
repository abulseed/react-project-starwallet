import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DataStore from '../../assets/data/data-store.json';
import MainHeadline from '../../components/Projects/MainHeadline/MainHeadline';
import PanelListGroup from '../../hoc/Panel/PanelListGroup';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import VerboseProjectHeader from '../../components/Projects/Verbose/VerboseProjectHeader';
import VerboseProjectBar from '../../components/Projects/Verbose/VerboseProjectBar';

class ProjectsGrid extends Component {

  state = {
    selectedFilter: 'Show',
    sortOrder: null
  }

  filterByHandler = (selected) => {
    this.setState({ selectedFilter: selected });
  }

  headerClickedHandler = () => {
    const order = this.state.sortOrder;
    if (order != null) {
      this.setState({ sortOrder: !order });
    } else {
      this.setState({ sortOrder: true });
    }
  }

  sortAsc(proj1, proj2) {
    if (proj1.title < proj2.title) {
      return -1;
    }
    if (proj1.title > proj2.title) {
      return 1;
    }
    return 0;
  }

  sortDesc(proj1, proj2) {
    if (proj1.title < proj2.title) {
      return 1;
    }
    if (proj1.title > proj2.title) {
      return -1;
    }
    return 0;
  }

  render() {
    let projectList = [...this.props.projects];
    if (this.state.selectedFilter !== 'Show') {
      projectList = projectList.filter(proj => {
        return proj.status === this.state.selectedFilter;
      });
    }
    if (this.state.sortOrder != null) {
      if (this.state.sortOrder === true) {
        projectList = projectList.sort(this.sortAsc)
      } else {
        projectList = projectList.sort(this.sortDesc)
      }
    }
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
              heading={<MainHeadline
                projects={this.props.projects}
                selected={this.filterByHandler}
                show={this.state.selectedFilter} />} >
              <Aux>
                <VerboseProjectHeader clicked={this.headerClickedHandler} />
                <VerboseProjectBar list={projectList} />
              </Aux>
            </PanelListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProjectsGrid;