export const HeaderVariant = {
    hidden: {
    },
    visible: {
       
            transition: {
                delay: 2, 
                duration: 1.5
            }
    },
    exit: {
        x: '-100vh',
        transition: {
            ease: 'easeInOut'
        }
    }
}
export const HeaderImgVariant = {
    hidden: {
        x: '-100vh',
        opacity: 0
    },
    visible: {
         x: 0,
         opacity: 1,

            transition: {
                delay: 2, 
                stiffness: 80,
                type: 'spring',
                damping: 7
            }
    }
}

export const HeaderDividerVariant = {
    hidden: {
        scaleY: 0, scaleX: 1
    },
    visible: {
        scaleY: 1.3,
        scaleX: 1,
            transition: {
                stiffness: 25,
                type: 'spring', 
                delay: 1, 
                transition: 20
            }
    }
}


export const HeaderH1Variant = {
    hidden: {
        opacity: 0,
        x: '100vh'
    },
    visible: {
        opacity: 1,
        x: 0,
            transition: {
                delay: 1,
                type: 'spring', 
                stiffness: 30,
                mass: 1
            }
    }
}
export const HeaderH2Variant = {
    hidden: {
        x: '-100vh', 
        opacity: 0 
    },
    visible: {
        x: 0,
        opacity: 1,
            transition: {
                delay: 0, 
                type: 'spring', 
                stiffness: 30,
            }
    }
}

export const HeaderH4Variant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
            transition: {
                transition: 3, 
                type: 'spring',
                delay: 3,
                stiffness: 10
            }
    }
}

export const HeaderBtn1Variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                delay: 4,
                stiffness: 10,
                type: 'spring'
            }
    }
}

export const HeaderBtn2Variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
            transition: {
                delay: 4,
                stiffness: 10,
                type: 'spring'
            }
    }
}