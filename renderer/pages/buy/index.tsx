import React, { FC, useState } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../api'
import Curve from '../../layouts/Curve'
import { state } from '../../state'
import { showErrorSnackbar, showSuccessSnackbar } from '../../utils'

const Buy: FC = () => {
	const snap = useSnapshot(state)
	const [data, setData] = useState({
		number_card_1: '',
		number_card_2: '',
		number_card_3: '',
		number_card_4: '',
		name: '',
		day: 1,
		year: 2017,
		cvv: 0
	})
	const [isCardFlipped, setCardFlipped] = useState(false)

	const handleSubmit = async e => {
		try {
			e.preventDefault()

			const preparedData = {
				...data,
				number_card: Number(
					data.number_card_1 +
						data.number_card_2 +
						data.number_card_3 +
						data.number_card_4
				),
				name: data.name?.trim(),
				day: data.day,
				year: data.year,
				cvv: data.cvv
			}

			console.log('data', data)

			const { number_card, name, cvv } = preparedData

			if (number_card.toString().length !== 16) {
				return showErrorSnackbar({
					message: 'Номер карты указан не верно'
				})
			}

			if (!name.length) {
				return showErrorSnackbar({
					message: 'Имя не указано'
				})
			}

			if (cvv.toString().length !== 3) {
				setCardFlipped(true)
				return showErrorSnackbar({
					message: 'CVV код не указан'
				})
			}

			Api.user.byuSubscribe().then(res => {
				showSuccessSnackbar('Вы успешно купили подписку MovieHub Premium')
				state.user = res
			})
		} catch (err) {
			showErrorSnackbar({ message: 'Что-то пошло не так' })
			console.error(err)
		}
	}

	const onHandleChange = (value: string, key: any) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	const onSelectChange = (value: string, key: any) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<Curve>
			<div id='area'>
				{snap.user?.subscribe ? (
					<div className='subscribe'>
						У вас уже есть активная подписка, спасибо!
					</div>
				) : (
					<>
						<div className='top'>
							<h3>Покупка MovieHub Premium</h3>
							<div>Цена: 1000 рублей</div>
						</div>
						<div className={`master-card ${isCardFlipped ? 'flipped' : ''}`}>
							<div className='card'>
								<div className='title'>Кредитная карта</div>
								<div className='input-number'>
									<span className='title-number'>Номер карты</span>
									<div className='inputs-number'>
										<input
											type='text'
											maxLength={4}
											name='number-card'
											placeholder='0000'
											required
											value={data.number_card_1}
											onChange={e =>
												onHandleChange(e.target.value, 'number_card_1')
											}
										/>
										<input
											type='text'
											maxLength={4}
											name='number-card'
											placeholder='0000'
											required
											value={data.number_card_2}
											onChange={e =>
												onHandleChange(e.target.value, 'number_card_2')
											}
										/>
										<input
											type='text'
											maxLength={4}
											name='number-card'
											placeholder='0000'
											required
											value={data.number_card_3}
											onChange={e =>
												onHandleChange(e.target.value, 'number_card_3')
											}
										/>
										<input
											type='text'
											maxLength={4}
											name='number-card'
											placeholder='0000'
											required
											value={data.number_card_4}
											onChange={e =>
												onHandleChange(e.target.value, 'number_card_4')
											}
										/>
									</div>
									<div className='selects-date selecters'>
										<div className='selects'>
											<div className='day-select'>
												<span>День</span>
												<select
													id='dates'
													value={data.day}
													onChange={e => onSelectChange(e.target.value, 'day')}
												>
													<option value='1'>1</option>
													<option value='2'>2</option>
													<option value='3'>3</option>
													<option value='4'>4</option>
													<option value='5'>5</option>
													<option value='6'>6</option>
													<option value='7'>7</option>
													<option value='8'>8</option>
													<option value='9'>9</option>
													<option value='10'>10</option>
													<option value='11'>11</option>
													<option value='12'>12</option>
													<option value='13'>13</option>
													<option value='14'>14</option>
													<option value='15'>15</option>
													<option value='16'>16</option>
													<option value='17'>17</option>
													<option value='18'>18</option>
													<option value='19'>19</option>
													<option value='20'>20</option>
													<option value='21'>21</option>
													<option value='22'>22</option>
													<option value='23'>23</option>
													<option value='24'>24</option>
													<option value='25'>25</option>
													<option value='26'>26</option>
													<option value='27'>27</option>
													<option value='28'>28</option>
													<option value='29'>29</option>
													<option value='30'>30</option>
												</select>
											</div>
											<div className='year-select'>
												<span>Год</span>
												<select
													id='dates'
													value={data.year}
													onChange={e => onSelectChange(e.target.value, 'year')}
												>
													<option value='2017'>2017</option>
													<option value='2018'>2018</option>
													<option value='2019'>2019</option>
													<option value='2020'>2020</option>
													<option value='2021'>2021</option>
													<option value='2022'>2022</option>
													<option value='2023'>2023</option>
													<option value='2024'>2024</option>
													<option value='2025'>2025</option>
													<option value='2026'>2026</option>
												</select>
											</div>
										</div>
										<div className='name'>
											<span>Имя</span>
											<input
												type='text'
												placeholder='Иван Иванов'
												value={data.name}
												onChange={e => onHandleChange(e.target.value, 'name')}
											/>
										</div>
									</div>
								</div>
								<div className='mark-gold'>
									<div className='round'>
										<div className='circles'>
											<div className='circle-1'></div>
											<div className='circle-2'></div>
										</div>
									</div>
								</div>
							</div>
							<div className='card-back'>
								<input
									type='text'
									maxLength={3}
									name='number-card'
									className='number-card'
									placeholder='000'
									required
									value={data.cvv}
									onChange={e => onHandleChange(e.target.value, 'cvv')}
								/>
								<div className='chip-card'></div>
							</div>
						</div>
						<div className='button-sent'>
							<button
								id='back'
								onClick={() => setCardFlipped(prevState => !prevState)}
							>
								Перевернуть
							</button>

							<button id='back' onClick={handleSubmit}>
								Купить
							</button>
						</div>
					</>
				)}
			</div>
		</Curve>
	)
}

export default Buy
