/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		extend: {
			colors: {
                'brand-50': '#FFEBE2',
                'brand-500': '#FF4F01',
                'brand-600': '#e04300',
				gray: {
					'50': '#F7F7F7',
					'75': '#ebebeb',
					'100': '#E1E1E1',
					'200': '#CFCFCF',
					'300': '#B1B1B1',
					'400': '#9E9E9E',
					'500': '#7E7E7E',
					'600': '#626262',
					'700': '#515151',
					'800': '#3B3B3B',
					'900': '#222222'
                },
                green: {
                    '600': '#7BB026',
                    '500': '#94C843'
                }
			}
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.gray.100', 'currentColor')
		})
	},
	variants: {
        borderWidth: ['responsive', 'first', 'hover', 'focus'],
    },
	plugins: []
}
