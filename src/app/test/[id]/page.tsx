import TestDetails from "@/components/TestDetails";

const data = {
    id: '1',
    name: 'Leon S. Kennedy',
    testName: 'Dengue',
    result: 'Negative'
};

const TestId = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <TestDetails data={data} />
        </>
    )
}

export default TestId;