"use client"

const Form = ({ fields, labeled=true, handle_Input }) => {
	const render_Field = (label, type, key) => {
		const s = {
			wrapper: 'flex flex-row capitalize justify-between',
			label: 'w-1/3 px-4 py-0 my-1 rounded-sm w-1/4',
			input: 'w-2/3 px-4 py-2 my-1 rounded-sm shadow-sm',
		}

		switch (type) {

			case 'select': let data = (label === "doctor") ? doctorNames : specialties
				return (
					<span className={s.wrapper} key={key}>
						{labeled ? <label className={s.label + ' w-'}> {label + ':'} </label> : null }
						<select className={s.input} id={label} name={label}
							placeholder={label}
							onInput={e => handle_Input(label, e.target.value)}
						> {Object.values(data).map((e, i) => <option key={i} value={e}> {e} </option>)}
						</select>
					</span>
				)

			default: return (
				<span className={s.wrapper} key={key}>
					{labeled ? <label className={s.label + ' w-'}> {label + ':'} </label> : null }
					<input className={s.input} id={label} name={label} type={type}
						placeholder={label}
						onInput={e => handle_Input(label, e.target.value)}
					/>
				</span>
			)
		}
	}

	const render_Form = (fields) => {
		return Object.entries(fields).map(([label, type], key) => {
			return render_Field(label, type, key)
		})
	}

	return render_Form( fields )
}

export default Form