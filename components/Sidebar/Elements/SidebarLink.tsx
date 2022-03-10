type Props = {
	text: string;
	Icon: any;
	active?: Boolean;
}

function SidebarLink({ text, active, Icon }: Props ) {
	return (
		<div 
			className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-5 hoverStyle
				${ active ? 'font-bold' : '' }
			`}
			
		>
			<Icon className="h-6" />
			<span className="hidden xl:inline">{ text }</span>
		</div>
	)
}

export default SidebarLink
