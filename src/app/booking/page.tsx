import { Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-6 py-16
        flex justify-center items-start">
            <form className="w-full max-w-[520px] rounded-md bg-white
            px-12 py-10 shadow-md">
                <h1 className="mb-10 text-5xl font-light text-neutral-800">
                    Venue Booking
                </h1>

                <DateReserve />

                <Button
                type="submit"
                name="Book Venue"
                variant="contained"
                fullWidth
                sx={{marginTop: "2.5rem", paddingY: "0.6rem"}}>
                    Book Venue
                </Button>
            </form>
        </main>
    );
}
