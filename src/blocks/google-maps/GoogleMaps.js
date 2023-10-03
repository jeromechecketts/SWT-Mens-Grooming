import React, { useEffect, useRef } from 'react';
// import GoogleMapsStyle from '../../data/google-maps/googleMapsStyle';

const Maps = () => {
	const mapRef = useRef(null);
	const map = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`; // Replace with your actual API key or environment variable
		script.async = true;
		script.onload = () => {
			initMap();
		};
		document.body.appendChild(script);
	}, []);

	const initMap = () => {
		// 315 E Main St, Uvalde, TX 78801
		const address_latlng = new window.google.maps.LatLng(
			29.210792239396348,
			-99.78158811786552
		);

		map.current = new window.google.maps.Map(mapRef.current, {
			center: address_latlng,
			zoom: 18,
			zoomControl: true,
			mapTypeControl: true,
			scaleControl: true,
			streetViewControl: true,
			rotateControl: true,
			fullscreenControl: true,
			// styles: GoogleMapsStyle,
		});

		const icon = {
			url: '../../assets/img/demo/16_img.png',
			size: new window.google.maps.Size(112, 118),
		};

		map.current.setCenter(address_latlng);

		new window.google.maps.Marker({
			position: address_latlng,
			map: map.current,
			icon: icon,
		});
	};

	return (
		<div
			id='google-maps'
			ref={mapRef}
		></div>
	);
};

export default Maps;

