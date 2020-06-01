import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function CoursesPage({ courses, authors, actions, loading }) {
  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed: " + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed: " + error);
      });
    }
  }, []);

  async function handleDeleteCourse(course) {
    toast.success("Course deleted");
    try {
      await actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  }

  return (
    <>
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/course">
            {" "}
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
            >
              Add Course
            </button>
          </Link>
          <CourseList courses={courses} onDeleteClick={handleDeleteCourse} />
        </>
      )}
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
