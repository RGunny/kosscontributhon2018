import * as React from 'react';
import styled from 'styled-components';
import { Project, PointContainer, ProjectInfo } from '../styledComponent';
import { Tag, Icon, Divider, Tooltip } from 'antd';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

type TMentor = { name: string; profileUrl: string };

type TProject = {
  projectId: string;
  projectName: string;
  description: string;
  mentor: TMentor[];
  Repository: string[];

  CommitCount?: number;
  ForkEvent?: number;
  GollumEvent?: number;
  IssueCommentEvent?: number;
  IssuesEvent?: number;
  PullRequestEvent?: number;
  PushEvent?: number;
  WatchEvent?: number;
};

interface IProps {
  project?: TProject;
  pidx?: number;
  totMaxCnt?: number;
}
interface IState {
  showZero: boolean;
}

class ProjectCard extends React.Component<IProps> {
  render() {
    const { project: n, pidx: nidx, totMaxCnt = 0 } = this.props;
    const { CommitCount = 0, IssuesEvent = 0 } = n;

    return (
      <Project>
        {nidx < 4 ? (
          <Tag color={'volcano'} className={'ranking'}>
            <Icon type="heart" /> Hot
          </Tag>
        ) : null}

        <PointContainer>
          <div className={'point-chart'}>
            <RadialBarChart
              id={nidx + 'chart'}
              width={100}
              height={100}
              innerRadius="20%"
              outerRadius="100%"
              data={[
                { name: 'other', value: totMaxCnt, fill: '#dddddd' },
                { name: 'issue', value: IssuesEvent, fill: '#71b6f9' },
                { name: 'commit', value: CommitCount, fill: '#f05050' },
              ]}
              startAngle={240}
              endAngle={50}
            >
              <RadialBar minAngle={15} background dataKey="value" />
            </RadialBarChart>
          </div>
          <div className={'point-board'}>
            <div className={'point-commit'}>
              <Icon type="upload" />
              &nbsp;&nbsp;
              <b>{CommitCount}</b>
              Commit
            </div>
            <div className={'point-issue'}>
              <Icon type="exclamation-circle-o" />
              &nbsp;&nbsp;
              <b>{IssuesEvent}</b>
              Issue
            </div>
            <div className={'repos'}>
              {n.Repository.map((r, ridx) => (
                <Tooltip title={r} placement="topLeft" key={ridx}>
                  <Tag
                    onClick={() => {
                      window.open(r);
                    }}
                  >
                    <Icon type="github" />
                  </Tag>
                </Tooltip>
              ))}
            </div>
          </div>
        </PointContainer>
        <Divider />
        <ProjectInfo>
          <h3>{n.projectName}</h3>
          <p>{n.description}</p>
          <div className={'links'}>
            {n.mentor.map((m, midx) => {
              return m.name.length > 0 ? (
                <Tag
                  key={midx}
                  onClick={() => {
                    window.open(m.profileUrl);
                  }}
                >
                  {m.name}
                </Tag>
              ) : null;
            })}
          </div>
        </ProjectInfo>
      </Project>
    );
  }
}

export default ProjectCard;
