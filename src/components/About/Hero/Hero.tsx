import React from 'react'
import Gallery from '../Gallery/Gallery'

import * as S from './Hero.css'

type AboutTeam = {
  team_member_role: string
  team_member_name: string
}

type HeroProps = {
  content: {
    about_hero_kicker: string
    about_hero_title: string
    about__hero_section_one: string
    about_hero_section_two: string
    about_team_description: string
    about_team: AboutTeam[]
  }
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <S.Hero>
      <S.Kicker>{content.about_hero_kicker}</S.Kicker>
      <S.Title>{content.about_hero_title}</S.Title>
      <S.Flex>
        <S.Column>
          <S.Text>{content.about__hero_section_one}</S.Text>
        </S.Column>
        <S.Column>
          <S.Text>{content.about_hero_section_two}</S.Text>
        </S.Column>
      </S.Flex>
      <Gallery
        paginate={paginate}
        direction={direction}
        page={page}
        setPage={setPage}
      />
    </S.Hero>
  )
}

export default Hero
