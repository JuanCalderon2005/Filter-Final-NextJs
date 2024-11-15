'use client'
import { ICarsResponse } from "@/src/app/core/application/dto/cars/response.dto";
import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";
import TableComponent from "../../Molecules/Table";

interface MainProps {
  onEdit?: (rowIndex: number) => void;
  onView?: (rowId: number) => void;
  onDelete?: (rowIndex: number) => void;
  data: ICarsResponse;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const PageButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#7692FF" : "#d3d3d3")};
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 16px;
  margin: 0 6px;
  cursor: pointer;

  &:hover {
    background-color: #0061f3;
  }
`;

export default function MainComponent({ data, onEdit, onDelete }: MainProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page >= 1 && page <= data.metadata.totalPages) {
      params.set('page', page.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const currentPage = data.metadata.currentPage;
  const totalPages = data.metadata.totalPages;

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Container>
      <TableWrapper>
        <TableComponent tbody={data.data} onEdit={onEdit} onDelete={onDelete} />
      </TableWrapper>
      <PaginationWrapper>
        {pageNumbers.map((page) => (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => navigateToPage(page)}
          >
            {page}
          </PageButton>
        ))}
      </PaginationWrapper>
    </Container>
  );
}
