
// Usage : <ItemList data={ <array> } />
export default function ItemList({ data = [] }) {

	// console.log( 'ItemList.data:\n ', data );

	function build_Header() {
		if (data.length > 0) {
			return Object.keys(data[0]).map((el, i) =>
				<th className={'px-6 py-3'} key={i}> {el} </th>
			)
		}
	}

	function build_Body() {
		const style = 'px-6 py-3'
		if (data.length > 0) {
			return (
				(data).map((student, i) => {
					return (
						<tr key={i} className={'even:bg-slate-100'}>
							{Object.values(student).map((el, i) => {
								return <td className={style} key={i}> {el} </td>
							})}
						</tr>
					)
				})
			)
		}
	}


	return (
		(!data) ? null :
			<div className={'item-list-component flex flex-col gap-4 font-normal'}>
				<table className={'table-auto'}>
					<tbody>
						<tr className={'capitalize'}>
							{build_Header()}
						</tr>
						{build_Body()}
					</tbody>
				</table>
			</div>
	);
};