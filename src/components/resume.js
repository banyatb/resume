import React from 'react'
import { Layout, Row, Col, Progress } from 'antd'

import Avatar from './avatar'
import '../App.css'

import Profile from '../data/cv.json'

const progressGradient = { from: '#FDFC47', to: '#24FE41' }

const Resume = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Sider width={300} style={{ padding: '20px 0', backgroundColor: '#154D9F', color: '#eaeaea' }}>
        <Avatar profile={Profile.profileImage} />
        <Row>
          <span className='center' style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{Profile.name}</span>
        </Row>
        <Row>
          <span className='center' style={{ fontSize: '1rem' }}>{Profile.position}</span>
        </Row>
        <Row>
          <span className='sider-header'>Personal Info</span>
        </Row>
        <Row>
          <span className='sider-header-2'>Address</span><br />
          <span className='sider-content'>{Profile.address}</span><br />
          <span className='sider-header-2'>Phone</span><br />
          <span className='sider-content'>{Profile.phone}</span><br />
          <span className='sider-header-2'>Email</span><br />
          <span className='sider-content'>{Profile.email}</span><br />
          <span className='sider-header-2'>Github</span><br />
          <a href={Profile.github} target='_black' className='sider-content' style={{ color: '#eaeaea' }}>{Profile.github}</a><br />
        </Row>
        <Row>
          <span className='sider-header'>Skills</span>
        </Row>
        <Row>
          {(Profile.skills || []).map((skill) => (
            <div className='sider-content' key={skill.skill}>
              <span>{skill.skill}</span><br />
              <Progress strokeColor={progressGradient} percent={skill.level} showInfo={false} />
            </div>
          ))}
        </Row>
        <Row>
          <span className='sider-header'>Languages</span>
        </Row>
        <Row>
          {(Profile.languages || []).map((language) => (
            <div className='sider-content' key={language.language}>
              <span>{language.language}</span><br />
              <Progress strokeColor={progressGradient} percent={language.level} showInfo={false} />
            </div>
          ))}
        </Row>
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ padding: '20px', color: '#464646' }}>
          <Row>
            <div className='content-content'>
              {Profile.summary}
            </div>
          </Row>
          <Row>
            <div className='content-header'>Experience</div>
          </Row>
          {(Profile.experience || []).map((exp) => (
            <Row key={exp.duration} style={{ marginBottom: '16px' }}>
              <Col span={4}>{exp.duration}</Col>
              <Col span={20}>
                <div className='content-title'>{exp.position}, <span style={{ fontStyle: 'italic' }}>{exp.company}</span></div>
                <ul style={{ paddingLeft: '12px' }}>
                  {(exp.jobs || []).map((job) => (
                    <li key={job}>{job}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
          <Row>
            <div className='content-header'>Education</div>
          </Row>
          {(Profile.education || []).map((edu) => (
            <Row key={edu.duration} style={{ marginBottom: '16px' }}>
              <Col span={4}>{edu.duration}</Col>
              <Col span={20}>
                <div className='content-title'>{edu.degree}, <span style={{ fontStyle: 'italic' }}>{edu.school}</span></div>
              </Col>
            </Row>
          ))}
          <Row>
            <div className='content-header'>Achievements</div>
          </Row>
          <Row style={{ marginBottom: '16px' }}>
            <Col span={4}></Col>
            <Col span={20}>
              <ul style={{ paddingLeft: '12px' }}>
                {(Profile.achievements || []).map((o, index) => (
                  <li key={`ach-${index}`}>{o}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <div className='content-header'>Interests</div>
          </Row>
          <Row style={{ marginBottom: '16px' }}>
            <Col span={4}></Col>
            <Col span={20}>
              <ul style={{ paddingLeft: '12px' }}>
                {(Profile.interests || []).map((o, index) => (
                  <li key={`int-${index}`}>{o}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default Resume
