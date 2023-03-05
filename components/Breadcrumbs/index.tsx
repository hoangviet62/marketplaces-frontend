import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import {Breadcrumbs, Chip} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor =
		theme.palette.mode === 'light'
			? theme.palette.grey[300]
			: theme.palette.grey[800];
	return {
		backgroundColor,
		height: theme.spacing(3),
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover, &:focus': {
			backgroundColor: emphasize(backgroundColor, 0.06),
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
}) as typeof Chip;

interface Item {
	label: string
	href: string
	component?: string
	isActive?: boolean
}

const BreadCrumbs = ({items}: {items: Item[]}) => {
	const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<StyledBreadcrumb
					component="a"
					href="#"
					label="Home"
					icon={<HomeIcon fontSize="small" />}
				/>
				{items.map((item: Item) => 
					<StyledBreadcrumb
						key={`breadcrumbs_${item.label}`}
						component="a" href={item.href}
						label={item.label}
					/>
				)}
			</Breadcrumbs>
		</div>
	)
}

export default BreadCrumbs