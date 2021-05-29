import React from 'react';
import { useSelector } from 'react-redux';
import IssueListItem from './IssueListItem';

const currentIssues = (state) => state.issues.entities;

const currentStatus = (state) => state.issues.status;

const IssueList = () => {

  const issues = useSelector(currentIssues);

  const status = useSelector(currentStatus);

  if (status === 'default') {
    return <h2>Press download button...</h2>;
  } else if (status === 'loading') {
    return <h2>Loading...</h2>;
  }
  
  const renderedListItems = issues.map((issue) => {
    return <IssueListItem text={issue.body} />
  });

  return <ul className="issue-list">{renderedListItems}</ul>;
}

export default IssueList;