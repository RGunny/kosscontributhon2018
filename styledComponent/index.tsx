import * as React from 'react';
import styled from 'styled-components';
import { Layout, Col } from 'antd';

const StyledLayoutContent = styled(Layout.Content)`
  border-top: 3px solid #71b6f9;
  height: 100vh;
  padding: 2vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #444;
  }
  ::-webkit-scrollbar-track {
    background: #ebeff2;
  }
`;

const PaddedCol = styled(Col as any)`
  padding: 1vh;
`;

const Project = styled.div`
  height: 270px;
  min-height: 270px;
  padding: 10px;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  .ranking {
    position: absolute;
    right: 10px;
    top: 20px;
  }
  .ant-divider-horizontal {
    margin: 5px 0 0 0;
  }
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  .point-board {
    padding-top: 42px;
    margin-left: -25px;
  }

  .point-commit,
  .point-issue {
    font-size: 15px;
  }
  .point-commit {
    color: #f05050;
  }
  .point-issue {
    color: #71b6f9;
  }

  .repos {
    position: absolute;
    left: 90px;
    top: 8px;
    padding-top: 3px;
  }
`;

const ProjectInfo = styled.div`
  padding: 15px 10px;
  word-break: keep-all;

  h3 {
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    color: #333;
    font-size: 16px;
    max-height: 19px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.2;
    margin-bottom: 5px;
  }
  p {
    font-size: 13px;
    margin-top: 0;
    max-height: 38px;
    overflow: hidden;
  }

  .links {
    position: absolute;
    bottom: 15px;
    left: 20px;
    .ant-tag {
      margin-right: 5px;
      margin-top: 4px;
    }
    a {
      color: #9d9d9d;
    }
  }
`;

const StyledLayoutSider = styled(Layout.Sider)`
  border-top: 3px solid #71b6f9;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  padding: 20px;
  overflow: auto;
  overflow-x: hidden;
  height: 100vh;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #444;
  }
  ::-webkit-scrollbar-track {
    background: #ebeff2;
  }

  h2 {
    font-family: 'Karla', sans-serif;
    color: #3576bb;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
  }

  .projectName {
    color: #000;
  }
  .eventBody {
    word-break: break-all;
    margin-top: 5px;
    font-size: 12px;
    color: #888;
    .ant-tag {
      margin-right: 3px;
      height: 18px;
      line-height: 18px;
      padding: 0 5px;
    }
  }
`;

export { StyledLayoutContent, PaddedCol, Project, PointContainer, ProjectInfo, StyledLayoutSider };
