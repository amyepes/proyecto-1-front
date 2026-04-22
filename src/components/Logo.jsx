function Logo() {
	return (
		<h5 className="m-0 text-[xx-large] font-semibold text-[var(--blue-color)]">
			<span className="inline-flex items-center gap-[0.45rem]" aria-label="Explorador">
				<svg
					className="h-[1.2em] w-[1.2em] shrink-0"
					viewBox="0 0 24 24"
					role="img"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="10" fill="#0f172a" />
					<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
					<path
						fill="currentColor"
						d="
							M7.0 3.2
							L8.5 2.5 L10.5 2.8 L12.2 3.5 L13.5 4.5
							L14.0 5.8 L13.2 6.8 L12.0 7.2 L11.0 6.8
							L10.0 7.2 L9.2 8.5 L9.8 9.8 L11.0 10.5
							L11.5 11.5 L10.8 12.2 L9.5 12.5 L8.2 11.8
							L7.2 10.5 L6.8 9.0 L7.0 7.5 L7.8 6.2
							L7.5 5.0 L7.0 3.2 Z

							M9.8 13.0
							L11.0 12.5 L12.5 13.0 L13.5 14.2
							L13.8 15.5 L13.2 16.8 L13.5 17.8
							L13.0 19.0 L11.8 19.8 L10.5 19.5
							L9.5 18.5 L9.0 17.2 L9.2 15.8
							L9.8 14.8 L9.5 13.8 Z
						"
					/>
				</svg>
				Explorador
			</span>
		</h5>
	)
}

export default Logo
