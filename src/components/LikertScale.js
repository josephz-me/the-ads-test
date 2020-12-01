import React from 'react';
import SHA1 from 'crypto-js/sha1';

import styles from './LikertScale.module.scss';

class LikertScale extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isKeyboardUser: false
		};
	}

	componentDidMount () {
		document.addEventListener('keydown', this.listenForTab);
	}

	componentWillUnmount () {
		document.removeEventListener('keydown', this.listenForTab);
	}

	render () {
		const { question, responses } = this.props;
		const sha = String(SHA1(question)).substring(0, 7);
		const radios = responses.map((response, idx) => {
			const uniqueKey = `${sha}${idx}`;
			return (
				<label key={uniqueKey} htmlFor={uniqueKey} className={styles.likertResponse}>
					<span className={styles.likertLine} />
					<span className={styles.likertLine} />
					<input
						type='radio'
						value={response.value}
						name={sha}
						id={uniqueKey}
						className={styles.visuallyHidden}
						onClick={this.chosen}
					/>
					<span className={styles.likertIndicator} />
					<span className={styles.likertText}>{response.text}</span>
				</label>
			);
		});

		return (
			<>
				<h2 className={styles.title}>{question}</h2>
				<fieldset className={`${styles.likertScale} ${this.state.isKeyboardUser ? styles.isKeyboardUser : ''}`}>
					<div className={styles.likertBand}>{radios}</div>
				</fieldset>
			</>
		);
	}

	chosen = evt => {
		if (typeof this.props.picked === 'function') {
			this.props.picked(evt.target.value);
		}
	};

	listenForTab = evt => {
		if (evt.key === 'Tab') {
			this.setState({ isKeyboardUser: true });
		}
	};
}

export default LikertScale;