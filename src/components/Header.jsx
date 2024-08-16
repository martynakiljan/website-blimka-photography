import React, { useEffect } from 'react'
import img from '../assets/header-images/header-img-main.png'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { t } = useTranslation()

	return (
		<header className='header section' id='home'>
			<div className='header__inner'>
				<img className='header__img header__img-1 kenburns-top' src={img} alt='wedding' />
			</div>
			<div className='header__bottom'>
				<p className='header__text'>{t('header.title')}</p>
				<a className='header__button' href='#contact'>
					{' '}
					{t('header.buttonText')}
				</a>
			</div>
		</header>
	)
}

export default Header
