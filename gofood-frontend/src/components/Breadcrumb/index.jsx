import React, { useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadcrumbComponent({ props }) {

  return (
    <Breadcrumb className="">
      {props.map((page, index) => (
        <Breadcrumb.Item href={page.url} key={index} active={index === props.length - 1}>
          {page.pageName}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

