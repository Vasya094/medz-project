import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const NavigationChips = () => {
	const router = useRouter()

	const handleNavigation = (path: string) => {
		router.push(path)
	}

	return (
		<Box display="flex" justifyContent="center" mb={4}>
			<Button 
				onClick={() => handleNavigation('/about/vibratoryplate')} 
				variant="outline" 
				mr={2}
			>
				Виброплита
			</Button>
			<Button 
				variant="outline"
                disabled
			>
				Другие Статьи
			</Button>
		</Box>
	)
}

export default NavigationChips 