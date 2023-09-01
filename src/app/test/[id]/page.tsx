import TestDetails from "@/components/TestDetails";
import { notFound } from "next/navigation";

const data = {
    id: '1',
    name: 'Leon S. Kennedy',
    testName: 'Dengue',
    result: 'Negative'
};

const TestId = async ({ params }: { params: { id: string } }) => {
    const id = params?.id;
    return (
        <TestDetails data={data} />
    );
}

export default TestId;