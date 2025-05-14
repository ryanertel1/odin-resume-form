import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PiDropSimpleBold } from 'react-icons/pi';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        height: '10rem',
        width: '100%',
        backgroundColor: '#222831',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextRow: {
        flexDirection: 'row',
        gap: '3rem',
    },
    liContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    liInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '10rem',
    },
    liBody: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const ResumePane = ({ userData, educationData, experienceData }) => {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.header}>
                    <Text style={{fontSize: '1.8rem'}}>{userData.name}</Text>
                    <View style={styles.headerTextRow}>
                        <Text>{userData.phone}</Text>
                        <Text>{userData.email}</Text>
                    </View>
                    <Text>{userData.address}</Text>
                </View>
                {educationData ?
                    <View style={styles.section}>
                        <Text style={{fontSize:'1.2rem', alignSelf: 'center'}}>Education</Text>
                        {educationData.map((item) => (
                            <View style={styles.liContainer}>
                                <View style={styles.liInfo}>
                                    <Text>{item.start.slice(0,7)} - {item.end.slice(0,7)}</Text>
                                    <Text style={{gridColumn: '1 / span 2'}}>{item.location}</Text>
                                </View>
                                <View style={styles.liBody}>
                                    <Text style={{fontWeight: 'bold'}}>{item.school}</Text>
                                    <Text>{item.degree}</Text>
                                </View>
                            </View>
                        ))}
                    </View>:<></>
                }
                {experienceData ?
                <View style={styles.section}>
                    <Text style={{fontSize:'1.2rem', alignSelf: 'center'}}>Work Experience</Text>
                    {experienceData.map((item) => (
                        <View style={styles.liContainer}>
                            <View style={styles.liInfo}>
                                <Text>{item.start.slice(0,7)} - {item.end.slice(0,7)}</Text>
                                <Text style={{gridColumn: '1 / span 2'}}>{item.location}</Text>
                            </View>
                            <View style={styles.liBody}>
                                <Text style={{fontWeight: 'bold'}}>{item.company}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>:<></>
                }
            </Page>
        </Document>
    )
}

export default ResumePane;
