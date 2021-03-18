import React from 'react'
import { Layout, Row, Progress } from 'antd'

import Avatar from './components/avatar'
import './App.css'

import Profile from './data/cv.json'

function App() {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Sider width={300} style={{ backgroundColor: '#154D9F', color: 'white' }}>
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
          <a href={Profile.github} target='_black' className='sider-content' style={{ color: 'white' }}>{Profile.github}</a><br />
        </Row>
        <Row>
          <span className='sider-header'>Skills</span>
        </Row>
        <Row>
          {(Profile.skills || []).map((skill) => (
            <div className='sider-content' key={skill.skill}>
              <span>{skill.skill}</span><br />
              <Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={skill.level} showInfo={false} />
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
              <Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={language.level} showInfo={false} />
            </div>
          ))}
        </Row>
      </Layout.Sider>
      <Layout>
        <Layout.Content>Content</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
