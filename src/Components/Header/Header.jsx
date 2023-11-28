import './Header.css'

function Header() {
	return (
			<div className={'header'}>
				<div className={'block_top'}>
					<div className={'delivered'}>
						Доставленно: 10
					</div>
					<div className={'delivered_all'}>
						Всего: 15
					</div>
				</div>
			</div>
	)
}

export default Header
